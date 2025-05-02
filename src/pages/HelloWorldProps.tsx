type HelloWorldProps = {
  nome: string;
};

export const HelloWorld = ({ nome }: HelloWorldProps) => {
  return (
    <h1>
      Olá, {nome}! 
    </h1>
  );
};
