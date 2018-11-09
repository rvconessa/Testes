<?php

namespace ProductsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="Products")
 */
class Product
{
	/**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
	private $id;


    /**
     * @ORM\Column(type="integer")
     */
    private $code;

	/**
	 * @ORM\Column(type="string", length=120)
	 */
	private $description;

	/**
	 * @ORM\Column(type="integer")
	 */
	private $balance;

	/**
     * @ORM\Column(type="decimal", scale=2)
     */
	private $price;

	/**
	 * @ORM\Column(type="boolean")
	 */
	private $active;


    /**
     * Gets the value of id.
     *
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Sets the value of code.
     *
     * @param mixed $code the code
     *
     * @return self
     */
    public function setCode($code)
    {
        $this->code = $code;

        return $this;
    }

    /**
     * Gets the value of code.
     *
     * @return mixed
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * Sets the value of id.
     *
     * @param mixed $id the id
     *
     * @return self
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Gets the value of description.
     *
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Sets the value of description.
     *
     * @param mixed $description the description
     *
     * @return self
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Gets the value of balance.
     *
     * @return mixed
     */
    public function getBalance()
    {
        return $this->balance;
    }

    /**
     * Sets the value of balance.
     *
     * @param mixed $balance the balance
     *
     * @return self
     */
    public function setBalance($balance)
    {
        $this->balance = $balance;

        return $this;
    }

    /**
     * Gets the value of price.
     *
     * @return mixed
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Sets the value of price.
     *
     * @param mixed $price the price
     *
     * @return self
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Gets the value of active.
     *
     * @return mixed
     */
    public function getActive()
    {
        return $this->active;
    }

    /**
     * Sets the value of active.
     *
     * @param mixed $active the active
     *
     * @return self
     */
    public function setActive($active)
    {
        $this->active = $active;

        return $this;
    }
}