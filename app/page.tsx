import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <section className="pb-24 pt-40">
        <div className="container max-w-3xl">
          <h1 className="text-3xl font-bold">
            Portfolio
          </h1>
          <Button>Click me!</Button>
        </div>
      </section>
    </div>
  );
}
