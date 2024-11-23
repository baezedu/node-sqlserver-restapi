import { getConnection, sql } from "../database/connection.js";

  export const getProducts = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query("SELECT * FROM products");
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

   export const getProduct = async (req, res) => {
    console.log(req.params.id);

    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, req.params.id)
      .query("SELECT * FROM products WHERE id = @id");
      console.log(result);

      if (result.rowsAffected[0] == 0) {
        return res.status(400).json({ message: "Product not found" });       
      }

      return res.json(result.recordset[0]);
  }

   export const createProduct = async (req, res) => {
    console.log(req.body)

    const pool = await getConnection();
    const result = await pool
    .request()
    .input("name", sql.VarChar, req.body.name)
    .input("description", sql.Text, req.body.description)
    .input("quantity", sql.Int, req.body.quantity)
    .input("price", sql.Decimal, req.body.price)
    .query(
      "INSERT INTO products (name, description, quantity, price) VALUES (@name,@description,@quantity,@price); SELECT SCOPE_IDENTITY() as id;"
    );
    console.log(result);
    
    res.json({
      id: result.recordset[0].id,
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity,
      price: req.body.price,
    });

   }

   export const updateProduct = async (req, res) => {
    res.send("actualizando producto");
   }
   export const deleteProduct = async (req, res) => {
    res.send("eliminando producto");
   }