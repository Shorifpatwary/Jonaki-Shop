import MenuItems from "./MenuItems";
const Navbar = ({ menuItems }) => {
	const depthLevel = 2;

	return (
		<nav>
			<ul className="menus">
				{menuItems?.map((menu, index) => {
					<MenuItems items={menu} key={index} depthLevel={depthLevel} />;
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
