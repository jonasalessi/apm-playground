import {BrowserRouter, Route} from 'react-router-dom'
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
        <BrowserRouter>
            <ApmRoutes>
                <Route path="/" element={<Layout/>}>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route element={<Checkout/>}>
                    <Route path="/checkout" element={<AddressForm/>}/>
                    <Route path="/checkout/payment" element={<PaymentForm/>}/>
                    <Route path="/checkout/review" element={<Review/>}/>
                </Route>
                </Route>
            </ApmRoutes>
        </BrowserRouter>
    )
}