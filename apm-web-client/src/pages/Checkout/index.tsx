import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Outlet, useNavigate} from 'react-router-dom';
import {useState} from "react";

const steps = ['Shipping address', 'Payment details', 'Review your order'];
export default function Checkout() {
    const [activeStep, setActiveStep] = useState<number>(0);
    const navigate = useNavigate();

    function handlePage(page: number) {
        switch (page) {
            case 0:
                return navigate('/checkout')
            case 1:
                return navigate('/checkout/payment')
            case 2:
                return navigate('/checkout/review')
        }
    }

    function handleNext() {
        const nextPage = activeStep + 1
        setActiveStep(nextPage);
        handlePage(nextPage)
    }

    function handleBack() {
        const backPage = activeStep - 1
        setActiveStep(backPage);
        handlePage(backPage)
    }

    return (
        <>
            <Container component="main" maxWidth="sm" sx={{mb: 4}}>
                <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{pt: 3, pb: 5}}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <>
                            <Typography variant="h5" gutterBottom>
                                Thank you for your order.
                            </Typography>
                            <Typography variant="subtitle1">
                                Your order number is #2001539. We have emailed your order
                                confirmation, and will send you an update when your order has
                                shipped.
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Outlet/>
                            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{mt: 3, ml: 1}}>
                                        Back
                                    </Button>
                                )}
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{mt: 3, ml: 1}}
                                >
                                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </Button>
                            </Box>
                        </>
                    )}
                </Paper>
            </Container>
        </>
    );
}