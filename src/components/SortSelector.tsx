import * as Select from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import useProductQueryStore from "../store/productQueryStore";

const SortSelector = () => {
  const setSortOrder = useProductQueryStore((s) => s.setSortOrder);
  const sortOrder = [
    { value: "relevant", Label: "Sort by: Relevant" },
    { value: "low-high", Label: "Sort by: Low to High" },
    { value: "high-low", Label: "Sort by: High to Low" },
  ];
  return (
    <>
      <Select.Root onValueChange={setSortOrder}>
        {/* دکمه اصلی */}
        <Select.Trigger
          className="inline-flex items-center justify-between w-48 rounded-lg border border-gray-300
                   px-3 py-2 text-sm text-gray-700 bg-white hover:border-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-200"
          aria-label="Sort Order"
        >
          <Select.Value placeholder="Sort by.." />
          <Select.Icon>
            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
          </Select.Icon>
        </Select.Trigger>

        {/* محتوای بازشونده */}
        <Select.Portal>
          <Select.Content className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg animate-in fade-in-50">
            <Select.ScrollUpButton className="flex items-center justify-center h-6 text-gray-500">
              <ChevronUpIcon className="w-4 h-4" />
            </Select.ScrollUpButton>

            <Select.Viewport className="p-1">
              {sortOrder.map((order) => (
                <Select.Item
                  key={order.value}
                  value={order.value}
                  className="relative flex items-center px-3 py-2 rounded-md text-sm text-gray-700
                           cursor-pointer select-none hover:bg-gray-100 focus:bg-gray-100 outline-none"
                >
                  <Select.ItemText>{order.Label}</Select.ItemText>
                  <Select.ItemIndicator className="absolute right-2">
                    <CheckIcon className="w-4 h-4 text-blue-500" />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>

            <Select.ScrollDownButton className="flex items-center justify-center h-6 text-gray-500">
              <ChevronDownIcon className="w-4 h-4" />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  );
};

export default SortSelector;
