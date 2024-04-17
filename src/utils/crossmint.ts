const crossmintBaseUrl = process.env.CROSSMINT_BASE_URL + "/api";

const crossmintAPIHeaders = {
    accept: "application/json",
    "content-type": "application/json",
    "x-api-key": process.env.CROSSMINT_API || "",
};

export const callCrossmintAPI = async (
    endpoint: string,
    options: { method: string; body?: any }
) => {
    let url = `${crossmintBaseUrl}/${endpoint}`;

    const { body, method } = options;
    console.log(`Calling ${method} ${url}`);

    const response = await fetch(url, {
        body: body ? JSON.stringify(body) : null,
        method,
        headers: crossmintAPIHeaders,
    });
    const json = await response.json();
    return json;
};
