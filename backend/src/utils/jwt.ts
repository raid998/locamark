import jwt from "jsonwebtoken";

export function verifyJwt(token: string) {
  const publicKey: string = process.env.JWT_PUBLIC_KEY as string;
  const buffer = Buffer.from(publicKey, "base64");
  const decodedKey = buffer.toString("utf-8");

  return jwt.verify(token, decodedKey, { algorithms: ["RS256"] });
}

export function signJwt(payload: any, expiresIn?: string) {
  const privateKey: string = process.env.JWT_PRIVATE_KEY as string;
  const buffer = Buffer.from(privateKey, "base64");
  const decodedKey = buffer.toString("utf-8");

  return jwt.sign(payload, decodedKey, { algorithm: "RS256", expiresIn });
}
