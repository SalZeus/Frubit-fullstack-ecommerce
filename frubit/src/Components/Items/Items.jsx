import {motion} from "framer-motion"
import "./Items.scss"
import items from "../assets/itemsIndex";
import { useState } from "react";

const Items = () => {

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (id) => {
    // Encuentra el elemento en itemsForSale con el ID correspondiente
    const selectedItem = itemsForSale.find((item) => item.id === id);

    // Agrega el elemento al carrito
    setCartItems((prevItems) => [...prevItems, selectedItem]);
    console.log("in CArt:", cartItems, id);
  };

  const handleBuyNow = (id) => {
    // Lógica para realizar la compra ahora (puede ser diferente según tus necesidades)
    // Por ahora, simplemente muestra en la consola los elementos seleccionados.
    console.log("Purchasing:", cartItems, id);
  };

  const itemsForSale=[
    {
      itemName: 'Arroz',
      price: '20',
      unit: "kg",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.arroz1,
      id: 'arroz_1',
    },
    {
      itemName: 'Arroz 2 libras',
      price: '20',
      unit: "unidad",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.arroz2,
      id: 'arroz_2',
    },
    {
      itemName: 'Azucar Suger',
      price: '20',
      unit: "unidad",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.azucar1,
      id: 'arroz_2',
    },
    {
      itemName: 'Azucar Saupai',
      price: '20',
      unit: "unidad",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.azucar2,
      id: 'arroz_2',
    },
    {
      itemName: 'Carne Adobada',
      price: '20',
      unit: "kg",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.carne1,
      id: 'arroz_2',
    },
    {
      itemName: 'Carne precocida',
      price: '20',
      unit: "kg",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.carne2,
      id: 'arroz_2',
    },
    {
      itemName: 'Carne Finas Hierbas',
      price: '20',
      unit: "kg",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.carne3,
      id: 'arroz_2',
    },
    {
      itemName: 'Arroz2',
      price: '20',
      unit: "unidad",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.carne4,
      id: 'arroz_2',
    },
    {
      itemName: 'Carne termino medio precocida',
      price: '20',
      unit: "unidad",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.carne5,
      id: 'arroz_2',
    },
    {
      itemName: 'Cebolla Organica',
      price: '20',
      unit: "unidad",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.cebolla1,
      id: 'arroz_2',
    },
    {
      itemName: 'Cebolla Premium',
      price: '20',
      unit: "unidad",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.cebolla2,
      id: 'arroz_2',
    },
    {
      itemName: 'Cilantro escogido',
      price: '20',
      unit: "kg",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.cilantro1,
      id: 'arroz_2',
    },
    {
      itemName: 'Cilantro preservado premium',
      price: '20',
      unit: "kg",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.cilantro2,
      id: 'arroz_2',
    },
    {
      itemName: 'Arroz Japones',
      price: '20',
      unit: "unidad",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.arroz2,
      id: 'arroz_2',
    },
    {
      itemName: 'Coca cola 6 pack',
      price: '20',
      unit: "unidad",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.cocacola1,
      id: 'arroz_2',
    },
    {
      itemName: 'Coca Cola 8 pack',
      price: '20',
      unit: "unidad",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.cocacola2,
      id: 'arroz_2',
    },
    {
      itemName: 'Huevos Gallina campesina',
      price: '20',
      unit: "unidad",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.huevos1,
      id: 'arroz_2',
    },
    {
      itemName: 'huevos Organicos',
      price: '20',
      unit: "unidad",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.huevos2,
      id: 'arroz_2',
    },
    {
      itemName: 'Papa a las hierbas',
      price: '20',
      unit: "kg",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.papa1,
      id: 'arroz_2',
    },
    {
      itemName: 'Papa pre-hervida',
      price: '20',
      unit: "kg",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.papa2,
      id: 'arroz_2',
    },
    {
      itemName: 'Papa Criolla',
      price: '20',
      unit: "kg",
      description: '1 Libra de arroz premium de la mejor calidad y selección.',
      imageUrl: items.papa3,
      id: 'arroz_2',
    },    
  ]

  return (
    <motion.section>
      <div className="item-container">
        {itemsForSale?.map(({ itemName, price, description, unit, imageUrl, id }) => (
          <div className="item" key={`${itemName}-${id}`}>
            <div className="item-image">
              <img src={imageUrl} alt={itemName} />
              <p className="description">{description}</p>
              <p className="price">${price} mil pesos por {unit}</p>
            </div>
            <button onClick={()=> handleAddToCart(id)}>Agregar al carrito</button>
            <button onClick={()=> handleBuyNow(id)}>Llevar ahora</button>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Items;