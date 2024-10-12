import React from "react";

const CartProductItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex items-center gap-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>

        <p className="text-sm text-gray-500">Price: ${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={onDecrease} className="px-2 py-1 bg-gray-200 rounded">
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={onIncrease} className="px-2 py-1 bg-gray-200 rounded">
          +
        </button>
      </div>
      <button onClick={onRemove} className="text-red-500">
        Remove
      </button>
    </div>
  );
};

export default CartProductItem;
