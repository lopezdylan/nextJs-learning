import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid2';
function ProductPreview({
    name,
    description,
    link,
    logo,
    slug
} : {
    name: string;
    description: string,
    link: any,
    logo: any,
    slug: string;
}) {
    return (
    <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="80"
                width="20"
                image={logo.url}
                alt="Logo"
                sx={{ 
                    width: '40%',
                    objectFit: 'contain',
                    display: 'block',
                    marginRight: 'auto',
                    marginLeft: 'auto'
                }} 
            />
                <CardContent sx={{ height: 205 }}>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {description}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    );
}

export default function Products({ products }: { products: any[] }) {
    return (
    <section>
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            Products
        </h2>
            <Grid container spacing={2}> {/* Create a container for the grid */}

                    {products.map((product) => (
                        <Grid size={{ xs: 12, sm: 4, md: 4 }}> {/* 4 columns on small screens and up */}
                            <ProductPreview
                                key={product.slug}
                                name={product.name}
                                description={product.description}
                                link={product.link}
                                logo={product.logo}
                                slug={product.slug}
                            />
                        </Grid>
                    ))}

            </Grid>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
   
        </div> */}
    </section>
    );
}