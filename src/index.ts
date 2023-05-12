import hvrsn from "hvrsn";

const PI180 = Math.PI / 180;
const rad = (deg: number) => deg * PI180;

const haaveersiinee = (lat1: number, lng1: number, lat2: number, lng2: number, r?: number) =>
  hvrsn(rad(lat1), rad(lng1), rad(lat2), rad(lng2), r);

export { rad };
export default haaveersiinee;
