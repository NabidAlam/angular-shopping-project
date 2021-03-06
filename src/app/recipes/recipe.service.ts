import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


export class RecipeService {


  recipeSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
        new Recipe('Pizza', 'Spicy Meatloaf with Fiesta Rice', 'https://st2.depositphotos.com/1192512/7019/v/950/depositphotos_70194861-stock-illustration-chocolate-chips-cookie-vector-illustration.jpg'),
    // tslint:disable-next-line: max-line-length
        new Recipe('Burger', 'Spicy Meatloaf with Fiesta Rice', 'https://i.pinimg.com/originals/15/18/25/151825f3c9267d4ce22f28c00789a6f0.jpg'),
        new Recipe('Pastry', 'Spicy Meatloaf with Fiesta Rice', 'https://www.splide.com/wp-content/uploads/2011/08/paptert.jpg'),
    // tslint:disable-next-line: max-line-length
        new Recipe('Cheese Burger', 'Spicy Meatloaf with Fiesta Rice', 'https://sparkpeo.hs.llnwd.net/e1/resize/630m620/e4/nw/2/5/l258791879.jpg'),
    // tslint:disable-next-line: max-line-length
        new Recipe('Cake', 'Spicy Meatloaf with Fiesta Rice', 'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_4250_1456.JPEG')
      ];

      getRecipes() {
        return this.recipes.slice();
      }
}
