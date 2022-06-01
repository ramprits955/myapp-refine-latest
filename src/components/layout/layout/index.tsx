import React from "react";

import { LayoutProps } from "@pankod/refine-core";
import { AntdLayout, Grid } from "@pankod/refine-antd";

export const Layout: React.FC<LayoutProps> = ({
  children,
  Header,
  Footer,
  OffLayoutArea,
}) => {
  const breakpoint = Grid.useBreakpoint();
  return (
    <AntdLayout style={{ minHeight: "100vh", flexDirection: "row" }}>
      <AntdLayout>
        {Header && <Header />}
        <AntdLayout.Content style={{ padding: "0 50px", marginTop: 64 }}>
          <div
            style={{
              padding: breakpoint.sm ? 24 : 12,
              minHeight: 360,
            }}>
            {children}
          </div>
          {OffLayoutArea && <OffLayoutArea />}
        </AntdLayout.Content>
        {Footer && <Footer />}
      </AntdLayout>
    </AntdLayout>
  );
};
