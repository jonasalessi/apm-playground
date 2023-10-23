import {BrowserRouter, Route} from 'react-router-dom'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { ApmRoutes } from '@elastic/apm-rum-react';
import SignIn from './pages/SignIn'
import Products from './pages/Products'
import Checkout from "./pages/Checkout";
import AddressForm from "./pages/Checkout/AddressForm";
import PaymentForm from "./pages/Checkout/PaymentForm";
import Review from "./pages/Checkout/Review";
import Layout from "./components/Layout";

export default function Routers() {
    return (
        <BrowserRouter >
            <ApmRoutes>
                <Route path="/" element={<Layout/>}>
                <Route index element={<SignIn/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/checkout" element={<Checkout/>}>
                    <Route index element={<AddressForm/>}/>
                    <Route path="/checkout/payment" element={<PaymentForm/>}/>
                    <Route path="/checkout/review" element={<Review/>}/>
                </Route>
                </Route>
            </ApmRoutes>
        </BrowserRouter>
    )
}