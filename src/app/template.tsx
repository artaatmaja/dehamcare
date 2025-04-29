"use client";

import React, { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactLenis } from "lenis/react";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const Template = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ReactLenis root>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </QueryClientProvider>
    </ReactLenis>
  );
};

export default Template;
