import { createRouter, createWebHistory } from "vue-router";

import Create from "../views/AddProduct.vue";
import Edit from "../views/EditProduct.vue";
import Index from "../views/ProductList.vue";
import ProductComp from "../views/ProductPost.vue"

const routes = [
    {
        name: "Create",
        path: "/create",
        component: Create,
    },
    {
        name: "Edit",
        path: "/edit/:id",
        component: Edit,
    },
    {
        name: "Index",
        path: "/",
        component: Index,
    },
    {
        name: "ProductComp",
        path: "/ProductPostCompFares",
        component: ProductComp,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
