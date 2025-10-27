import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    // output:"export",
    // assetPrefix:"/Sales_Dashboard/",
    // basePath:"/Sales_Dashboard",
    // images:{
    //     domains:['KareemAshraf33925.github.io']
    // }
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
