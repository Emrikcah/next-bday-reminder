//This button is more dynamic now being a component
export const Button = ({children,onClick}) => <button onClick={onClick} className="btn">{children}</button>;
