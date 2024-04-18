import { EVMNFT } from '@crossmint/common-sdk-base';

interface VerifiableCredential {
    id: string;
    credentialSubject: any;
    expirationDate?: string;
    nft: EVMNFT;
    issuer: {
        id: string;
    };
    type: string[];
    issuanceDate: string;
    "@context": string[];
    proof?: {
        proofValue: string;
        [key: string]: any;
    };
}
interface EncryptedVerifiableCredential {
    id: string;
    payload: string;
}
type VerifiableCredentialType = VerifiableCredential | EncryptedVerifiableCredential;

interface VC_EVMNFT extends EVMNFT {
    metadata: any;
    locators: string;
    tokenStandard: string;
}
interface CredentialsCollection {
    nfts: VC_EVMNFT[];
    contractAddress: string;
    metadata: {
        credentialMetadata: {
            type: string[];
            issuerDid: string;
            encryption: boolean;
            credentialsEndpoint: string;
            [key: string]: any;
        };
    };
}

declare function isEncryptedVerifiableCredential(credential: VerifiableCredentialType): credential is EncryptedVerifiableCredential;

declare function verifyCredential(credential: VerifiableCredential, environment?: string): Promise<{
    validVC: boolean;
    error: string | undefined;
}>;
declare function validatePass(signedLocator: string, environment: string): Promise<{
    nft: VC_EVMNFT;
    collection: CredentialsCollection;
    credential: VerifiableCredential;
}>;

interface CredentialFilter {
    issuers?: string[];
    types?: string[];
}

declare function getCredentialCollections(chain: string, wallet: string, filters: CredentialFilter | undefined, environment: string): Promise<CredentialsCollection[]>;

declare class MetadataService {
    getContractMetadata(contractAddress: string, environment: string): Promise<any>;
    getContractWithVCMetadata(collections: CredentialsCollection[], environment: string): Promise<CredentialsCollection[]>;
    getFromIpfs(uri: string): Promise<any>;
}

declare class CrossmintAPI {
    private static apiKey;
    static ipfsGateways: string[];
    static init(apiKey: string, ipfsGateways?: string[]): void;
    static getHeaders(): {
        "x-api-key": string;
        accept: string;
    };
}

declare function getCredentialFromId(credentialId: string, environment: string): Promise<VerifiableCredentialType | null>;

declare function getNftFromLocator(locator: string, environment: string): Promise<{
    nft: VC_EVMNFT;
    collection: CredentialsCollection;
}>;

export { CrossmintAPI, EncryptedVerifiableCredential, MetadataService, VerifiableCredential, VerifiableCredentialType, getCredentialCollections, getCredentialFromId, getNftFromLocator, isEncryptedVerifiableCredential, validatePass, verifyCredential };
