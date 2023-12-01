import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Estilos para el PDF
const styles = StyleSheet.create({
  document: {
    margin: 10,
  },
  page: {
    flexDirection: "column",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: { margin: "auto", flexDirection: "row" },
  tableColHeader: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderBottomColor: "#000",
    backgroundColor: "#f2f2f2",
    padding: 5,
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderBottomWidth: 0,
    padding: 5,
  },
  product: {
    fontSize: 12,
    marginVertical: 5,
  },
  total: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: "bold",
  },
});
// Create Document Component

const MyDocument = ({ quotationData }) => {
  const calculateTotal = () => {
    return quotationData.products.reduce(
      (total, product) => total + product.price,
      0
    );
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Cotización de Productos</Text>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>Producto</View>
              <View style={styles.tableColHeader}>Precio</View>
            </View>

            {quotationData.products.map((product, index) => (
              <View style={styles.tableRow} key={index}>
                <View style={styles.tableCol}>{product.name}</View>
                <View style={styles.tableCol}>${product.price}</View>
              </View>
            ))}
          </View>

          <Text style={styles.total}>{`Total: $${calculateTotal()}`}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
