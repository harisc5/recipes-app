import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const RecipeCard = ({ recipe }) => {

    return (
        <Card key={recipe.id}>
            <CardContent>
                <CardMedia
                    component="img"
                    height="200"
                    image={recipe.image}
                    sx={{
                        objectFit: 'contain'
                    }}
                />
                <Typography sx={{
                    color: '#32a893'
                }}>
                    Preparation time: <b>{recipe.prepTime} minutes</b> 
                </Typography>
                <Typography variant="h5">
                    {recipe.title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default RecipeCard;