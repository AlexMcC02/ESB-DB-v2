function ErrorMessage({errorMessage}) {
    if (errorMessage.length === 0) {
        return null;
    }
    return (<p className="mt-4 text-base text-red-400">{errorMessage}</p>);
}

export default ErrorMessage;