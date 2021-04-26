import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import AddProducts from "../views/AddProducts.vue";
import ViewProducts from "../views/ViewProducts.vue";
const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/team",
		name: "Team",
		component: Team,
	},
	{
		path: "/addproducts",
		name: "AddProducts",
		component: AddProducts,
	},
	{
		path: "/viewproducts",
		name: "ViewProducts",
		component: ViewProducts,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
