import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {CrossmintAPI, validatePass} from "./verification-sdk/index.js";

dotenv.config({
    path: ".env.local"
});

CrossmintAPI.init(process.env.CROSSMIINT_SECRET)

const app = express();

const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.post("/verify", async (request, response) => {
        const {data} = request.body;

        try {
            await validatePass(data, process.env.CROSSMIINT_ENVIROMENT)

            const myToken = await getTokenByLocator(data);

            if (myToken == null) {
                response.status(400).json({message: "Invalid code"});
                return;
            }

            await burnToken(myToken.id);
            response.status(200).json({message: "Success"});

        } catch (e) {
            console.log(e)
            response.status(400).json({message: "Invalid code"});

        }

    }
)
;

app.listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
});


function crossmintBaseUrl() {
    return process.env.CROSSMIINT_ENVIROMENT === "production" ? "https://crossmint.com" : process.env.CROSSMIINT_ENVIROMENT === "staging" ? "https://staging.crossmint.com" : process.env.CROSSMIINT_ENVIROMENT;
}

async function getTokenByLocator(locator) {
    let keepLooping = true;
    let page = 1;
    let tokens = [];
    while (keepLooping) {
        //
        const tokenResponse = await fetch(
            crossmintBaseUrl() + `/api/2022-06-09/collections/${process.env.CROSSMIINT_COLLECTION_ID}/nfts?perPage=50&page=${page}`,
            {
                headers: {
                    'x-api-key': process.env.CROSSMIINT_SECRET,
                }
            }
        ).then((res) => res.json());

        if (tokenResponse.length === 0) {
            keepLooping = false;
        } else {
            tokens = [...tokens, ...tokenResponse];
            page++;
        }
    }

    const tokenThingy = locator.split("||");
    const tokenId = tokenThingy[0].split(":")[2];

    const myMagicToken = tokens.find(token => token.onChain.tokenId === tokenId)
    console.log("myMagicToken", myMagicToken)
    return myMagicToken;
}

async function burnToken(tokenId) {
    return await fetch(
        crossmintBaseUrl() + `/api/2022-06-09/collections/${process.env.CROSSMIINT_COLLECTION_ID}/nfts/${tokenId}`,
        {
            method: "DELETE",
            headers: {
                'x-api-key': process.env.CROSSMIINT_SECRET,
            }
        }
    ).then((res) => res.json());
}