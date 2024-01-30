import SubscriptionForm from './components/SubscriptionForm';
import { FormProvider } from './context/FormContext';

function App() {
  

  return (
    <FormProvider>
      <SubscriptionForm />
    </FormProvider>
  )
}

export default App
