import {ApmRoutes} from '@elastic/apm-rum-react'
import {BrowserRouter, Route} from 'react-router-dom'
import SignIn from './pages/SignIn'
import Products from './pages/Products'
import Checkout from "./pages/Checkout";
import AddressForm from "./pages/Checkout/AddressForm";
import PaymentForm from "./pages/Checkout/PaymentForm";
import Review from "./pages/Checkout/Review";

export default function Routers() {
    return (
        <BrowserRouter>
            <ApmRoutes>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/checkout" element={<Checkout/>}>
                    <Route path="address" element={<AddressForm/>}/>
                    <Route path="payment" element={<PaymentForm/>}/>
                    <Route path="review" element={<Review/>}/>
                </Route>
            </ApmRoutes>
        </BrowserRouter>
    )
}