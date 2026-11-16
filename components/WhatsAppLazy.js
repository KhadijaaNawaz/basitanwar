// react-whatsapp-widget and its CSS in one lazily loaded chunk (see pages/_app.js).
import "react-whatsapp-widget/dist/index.css";
import { WhatsAppWidget } from "react-whatsapp-widget";

export default function WhatsAppLazy() {
  return <WhatsAppWidget phoneNumber="+971524052485" />;
}
