import React from "react";

let parsedTodos = [];
function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageTodos = localStorage.getItem(itemName);
                const todoToReturn = localStorageTodos
                    ? JSON.parse(localStorageTodos)
                    : initialValue;
                setItem(todoToReturn);
                setLoading(false)
            }
            catch (error) {
                parsedTodos = initialValue;
                setError(true)
                setLoading(false)
            }
        }, 3000);

    }, [itemName]);
    const saveTodo = (newItems) => {
        localStorage.setItem(itemName, JSON.stringify(newItems));
        setItem(newItems);
    }
    return { item, saveTodo, loading, error };
}

export { useLocalStorage };