export const variables={
    subject: "",
    name: "",
    title: "",
    subtitle: "",
    orders: [
      {
        productName: "Product 1",
        price: "$20",
        imageUrl: "https://via.placeholder.com/50",
      },
      {
        productName: "Product 2",
        price: "$40",
        imageUrl: "https://via.placeholder.com/50",
      },
    ],
    total: "$60",
    shippingAddress: "",
    billingAddress: "",
    shippingMethod: "Standard Shipping",
  }
 export const variablesKey = [
    { title: "Subject", value: variables.subject, var: "subject" },
    { title: "Name", value: variables.name, var: "name" },
    { title: "Title", value: variables.title, var: "title" },
    { title: "SubTitle", value: variables.subtitle, var: "subtitle" },
    { title: "Total", value: variables.total, var: "total" },
    {
      title: "Address",
      value: variables.shippingAddress,
      var: "shippingAddress",
    },
  ];

  // constants.js
export const generateHtmlContent = (variables) => `
<div style="font-family: Arial, sans-serif; padding: 20px;">
  <h1>${variables.subject || "{{subject}}"}</h1>

  <h1>${variables.title || "{{title}}"}</h1>
  <h2>${variables.subtitle || "{{subtitle}}"}</h2>
  <p>Dear ${variables.name || "{{name}}"},</p>
  <p>Your order has been confirmed. Here are the details:</p>
  <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
    ${variables.orders
      .map(
        (order) => `
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">
          <img src="${order.imageUrl}" alt="${order.productName}" style="width: 50px; height: 50px; object-fit: cover;">
        </td>
        <td style="padding: 10px; border: 1px solid #ddd;">
          ${order.productName}
        </td>
        <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">
          ${order.price}
        </td>
      </tr>
    `
      )
      .join("")}
  </table>
  <p style="font-weight: bold; margin-top: 20px;">Total: ${
    variables.total || "{{total}}"
  }</p>
  <p><strong>Shipping Address:</strong> ${
    variables.shippingAddress || "{{shippingAddress}}"
  }</p>
  <p><strong>Billing Address:</strong> ${
    variables.billingAddress || "{{billingAddress}}"
  }</p>
  <p><strong>Shipping Method:</strong> ${
    variables.shippingMethod || "{{shippingMethod}}"
  }</p>
</div>
`;

export const generateUpdatedHtmlContent = (variables) => `
<div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
  <p style="font-size: 22px; font-weight: bold; color: #333;">${
    variables.subject || "{{subject}}"
  }</p>
  <p style="font-size: 16px; color: #555;">
    Dear ${variables.name || "{{name}}"},
  </p>
  <h1 style="font-size: 28px; color: #2c3e50; margin: 20px 0;">
    ${variables.title || "{{title}}"}
  </h1>
  <h2 style="font-size: 24px; color: #34495e; margin-bottom: 20px;">
    ${variables.subtitle || "{{subtitle}}"}
  </h2>
  <div style="border: 1px solid #ddd; padding: 15px; background-color: #fff; border-radius: 8px; margin-bottom: 20px;">
    <h3 style="font-size: 20px; color: #2c3e50;">Order Summary</h3>
    <p style="font-size: 16px; color: #333;">
      <strong>Total:</strong> ${variables.total || "{{total}}"}
    </p>
    <p style="font-size: 16px; color: #333;">
      <strong>Shipping Address:</strong> ${
        variables.shippingAddress || "{{shippingAddress}}"
      }
    </p>
  </div>
  <div style="font-size: 14px; color: #777; border-top: 1px solid #ddd; padding-top: 15px;">
    <p>Thank you for shopping with us!</p>
    <p>If you have any questions, please contact our support team.</p>
  </div>
</div>
`;
