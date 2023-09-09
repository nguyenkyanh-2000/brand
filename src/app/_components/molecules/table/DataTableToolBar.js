import React from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "../../atoms/button/Button";
import { Input } from "../../atoms/form/Input";
import { DataTableViewOptions } from "./DataTableViewOptions";
import { DataTableFacetedFilter } from "./DataTableFacetedFilter";
import classNames from "classnames";

const DataTableToolbar = ({ table }) => {
  const isFiltered = table.getState().columnFilters.length > 0;
  return (
    <div className={classNames("flex items-center justify-between")}>
      <div
        className={classNames(
          "flex flex-col md:flex-row flex-1 items-center space-x-2"
        )}
      >
        <Input
          placeholder="Filter tasks..."
          value={table.getColumn("name")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className={classNames("h-8 w-[150px] lg:w-[250px]")}
        />
        {table.getColumn("category") && (
          <DataTableFacetedFilter
            column={table.getColumn("category")}
            title="Categories"
            options={Array.from(
              table.getColumn("category").getFacetedUniqueValues().keys(),
              (value, id) => ({ value: value, label: value })
            )}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className={classNames("h-8 px-2 lg:px-3")}
          >
            Reset
            <Cross2Icon className={classNames("ml-2 h-4 w-4")} />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
};

export { DataTableToolbar };
