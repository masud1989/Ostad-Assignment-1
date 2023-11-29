export async function generateMetadata(){
    const res=await fetch(process.env.BASE_URL+"api/SiteMeta/Services");
    const data=await res.json();
    return{
        title:data[0]['title'],
        description:data[0]['description'],
        keywords:data[0]['keywords'],
        openGraph: {
            images: data[0]['image'],
        },
    }
}
const Layout = ({children}) => {
    return (
        <div className="">
            {children}
        </div>
    );
};

export default Layout;