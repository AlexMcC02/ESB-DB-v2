function noPlanetsMessage({noPlanetsMessage}) {
    if (noPlanetsMessage.length === 0) {
        return null;
    }
    return (<p className="mt-4 text-base text-gray-300">{noPlanetsMessage}</p>);
}

export default noPlanetsMessage;