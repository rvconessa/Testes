<?php

namespace ProductsBundle\Controller;

use ProductsBundle\Entity\Product;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


class ProductsController extends Controller
{

	/**
     * @Route("/products")
     */

    public function getProductsAction()
    {

        $repository = $this->getDoctrine()->getRepository('ProductsBundle:Product');

        $products = $repository->findAll();

        $serializer = $this->get('jms_serializer');
        $response = $serializer->serialize($products,'json');

        return new Response($response);
    }

    /**
     * @Route("/products/new")
     */

    public function newProductAction(Request $request)
    {

        return $this->render('pages/forms/productForm.html.twig');

    }

    /**
     * @Route("/products/create")
     */

    public function createProductAction(Request $request)
    {

    	try {

            if($request->isMethod('POST')){


                $product = new Product();

                $product->setCode($request->request->get('code'))
                        ->setDescription($request->request->get('description'))
                        ->setBalance($request->request->get('balance'))
                        ->setPrice($request->request->get('price'))
                        ->setActive($request->request->get('active'));

                $em = $this->getDoctrine()->getManager();
                $em->persist($product);
                $em->flush();

                $response = "Produto ".$request->request->get('description')." inserido com sucesso!";

                return new Response($response);

            }

		} catch (Doctrine\ORM\NoResultException $e) {

		  return $e;

		}

    }


    /**
     * @Route("/products/edit/{id}")
     */

    public function editFormProductAction($id)
    {

        $repository = $this->getDoctrine()->getRepository('ProductsBundle:Product');
        $product = $repository->find($id);

        return $this->render('pages/forms/productEditForm.html.twig', array(
            'product' => $product
        ));

    }

    /**
     * @Route("/products/edit")
     */

    public function editProductAction(Request $request)
    {

        try {

            if($request->isMethod('POST')){

                $repository = $this->getDoctrine()->getRepository('ProductsBundle:Product');
                $product = $repository->find($request->request->get('id'));

                $product->setCode($request->request->get('code'))
                    ->setDescription($request->request->get('description'))
                    ->setBalance($request->request->get('balance'))
                    ->setPrice($request->request->get('price'))
                    ->setActive($request->request->get('active'));

                $em = $this->getDoctrine()->getManager();
                $em->persist($product);
                $em->flush();

                $response = "Produto ".$request->request->get('description')." editado com sucesso!";

                return new Response($response);

            }


        } catch (Doctrine\ORM\NoResultException $e) {

            return $e;

        }

    }


    /**
     * @Route("/products/remove")
     */

    public function removeProductAction(Request $request)
    {

        try {

            $ids = $request->request->get('ids');

            $em = $this->getDoctrine()->getEntityManager();

            $repository = $this->getDoctrine()->getRepository('ProductsBundle:Product');

            foreach ($ids as $id){
                $product = $repository->find($id);
                $em->remove($product);
            }

            $em->flush();

            $response = count($ids)." Produtos deletados com sucesso!";

            return new Response($response);

        } catch (Doctrine\ORM\NoResultException $e) {

            return $e;

        }

    }


}
