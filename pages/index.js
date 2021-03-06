import { EmptyState, Layout, Page } from "@shopify/polaris";
// const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";4
const img =
  "https://polaris.shopify.com/assets/f6eda9771602775955152895b69914e4.png";

const Index = () => {
  return (
    <div>
      <Page>
        <Layout>
          {/* <TextStyle variation="positive">
            Hello from React Express App
          </TextStyle> */}
          <EmptyState
            heading="Discount your products temporarily"
            action={{
              content: "Select products",
              onAction: () => console.log("clicked"),
            }}
            image={img}
          >
            <p>Select products to change their price temporarily.</p>
          </EmptyState>
        </Layout>
      </Page>
    </div>
  );
};

export default Index;
