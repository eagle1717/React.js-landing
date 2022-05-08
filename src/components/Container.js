export default function Container(props) {
    return (
        <div className={`m-auto max-w-desktop w-full ${props.styles}`}>
            {props.children}
        </div>
    );
}
