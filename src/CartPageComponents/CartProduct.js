import QuantityButtonSmall from "../Expand/QuantityButtonSmall";
import useCartStore from "../store/cartStore";

const CartProduct = ({ image, productName, color, price, onRemove, id }) => {
  // دالة زيادة ونقصان العنصر
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const handleIncrease = () => {
    increaseQuantity(id); // تمرير id هنا
  };

  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const handleDecrease = () => {
    decreaseQuantity(id); // تمرير id هنا
  };

  const cartItems = useCartStore((state) => state.cartItems);
  const currentItem = cartItems.find((item) => item.id === id);
  const quantity = currentItem ? currentItem.quantity : 1; // افتراض 1 إذا لم يتم العثور على المنتج

  // حساب total price
  const totalPrice = quantity * price;

  return (
    <div
      data-aos="fade-up"
      className="w-full max-w-[643px] h-auto py-6 gap-0 border-b flex  flex-col md:flex-row justify-between "
    >
      {/* Cart Item */}
      <div className="flex w-full md:w-[316px] gap-4">
        <img alt={productName} src={image} className="w-[80px] h-[96px]" />
        <div className="w-full h-auto grid gap-2">
          <p className="font-inter text-[14px] font-semibold leading-[22px] text-left text-blackButton">
            {productName}
          </p>
          <p className="font-inter text-[12px] font-normal leading-[20px] text-left text-blackButton_50">
            Color: {color}
          </p>
          <button
            className="font-inter text-[14px] font-semibold leading-[22px] text-left text-blackButton_50"
            onClick={onRemove}
          >
            X Remove
          </button>
        </div>
      </div>
      {/* Quantity and Price Info */}
      <div className="w-full md:w-[328px] flex justify-between items-center md:mt-4 md:gap-14 gap-4 ">
        <QuantityButtonSmall
          quantity={quantity}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
        />
        <p>${price.toFixed(2)}</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartProduct;
