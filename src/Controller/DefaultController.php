<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Jcroll\FoursquareApiClient\Client\FoursquareClient;

class DefaultController extends AbstractController
{
    private $client;
    
    public function __construct() {
        /* Servis bağlantısı yapılıyor */

        $client = FoursquareClient::factory([
            'client_id'     => '5EJHD4YOCWBSMX2FOABDDSNSNNVKI5CAJ2NWLIOOILOTQUN0',
            'client_secret' => 'US12MHSWJMML1JYBO5DGQ25C5QL4O4KFXDLTWJTP2XDVQNFO',
        ]);

        $this->client = $client;
    }

    /**
     * @Route("/", name="index")
     */
    public function index()
    {
        /* Kategorilerin JSON listesi alınıyor */

        $command = $this->client->getCommand('venues/categories');
        $results = $this->client->execute($command);
        
        $data['categories'] = $results['response']['categories'];

        return $this->render('index.html.twig', $data);
    }

    /**
     * @Route("/category/{name}", name="category")
     */
    public function category($name)
    {
        /* Kategori içeriklerini alıp JSON olarak gönderiyoruz */

        $command = $this->client->getCommand('venues/explore', [
            'near'  => 'valletta',
            'query' => $name
        ]);
        $results = $this->client->execute($command);
        
        return new JsonResponse(['success' => true, 'name' => $name, 'response' => $results['response']]);
    }
}
