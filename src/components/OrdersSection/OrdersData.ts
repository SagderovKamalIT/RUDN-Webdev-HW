import photo1 from "../../assets/images/orders/photo.png";
import photo2 from "../../assets/images/orders/photo2.png";
import photo3 from "../../assets/images/orders/photo3.png";
import photo4 from "../../assets/images/orders/photo4.png";
import photo5 from "../../assets/images/orders/photo5.png";
import photo6 from "../../assets/images/orders/photo6.png";
import photo7 from "../../assets/images/orders/photo7.png";
import photo8 from "../../assets/images/orders/photo8.png";
import photo9 from "../../assets/images/orders/photo9.png";

export interface OrderItem {
  id: number;
  src: string;
  alt: string;
}

export const ordersData: OrderItem[] = [
  { id: 1, src: photo1, alt: "Заказ №1" },
  { id: 2, src: photo2, alt: "Заказ №2" },
  { id: 3, src: photo3, alt: "Заказ №3" },
  { id: 4, src: photo4, alt: "Заказ №4" },
  { id: 5, src: photo5, alt: "Заказ №5" },
  { id: 6, src: photo6, alt: "Заказ №6" },
  { id: 7, src: photo7, alt: "Заказ №7" },
  { id: 8, src: photo8, alt: "Заказ №8" },
  { id: 9, src: photo9, alt: "Заказ №9" },
];