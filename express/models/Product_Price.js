import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'Product_Price',
    {
      price_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      style_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      size_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      product_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'product_price', // 直接提供資料表名稱
      timestamps: true, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
      createdAt: 'created_at', // 建立的時間戳
      updatedAt: 'updated_at', // 更新的時間戳
    }
  )
}
