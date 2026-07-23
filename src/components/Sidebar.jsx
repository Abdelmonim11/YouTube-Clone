import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

function Sidebar({ selectedCategory, setSelectedCategory }) {

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
        key={category.name}
          className="category-btn"
          style={{
            background:
            category.name === selectedCategory ? "#FC1503" : "transparent",
            color: "white",
          }}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span
            style={{
              color: selectedCategory === category.name ? "white" : "red",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              marginLeft: "15px",
              opacity: selectedCategory === category.name ? "1" : "0.8",
              color: selectedCategory === category.name && "white",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;
