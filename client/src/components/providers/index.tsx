import { PRIMEREACT_PROVIDER_VALUE } from './consts';
import { PrimeReactProvider } from 'primereact/api';
import { ProvidersProps } from './types';

export const Providers = (props: ProvidersProps) => {
  const { children } = props;

  return (
    <PrimeReactProvider value={PRIMEREACT_PROVIDER_VALUE}>
      {children}
    </PrimeReactProvider>
  );
};
