export default function ErrorMessage({ message }) {
    return (
        <p
            style={{
                color: "white",
                backgroundColor: "rgba(255,0,0,.3)",
                padding: 10,
                textAlign: "center",
            }}
        >
            {message}
        </p>
    );
}
