// lets TypeScript accept `url:` imports (Parcel turns them into URL strings)
declare module "url:*" {
    const url: string;
    export default url;
}