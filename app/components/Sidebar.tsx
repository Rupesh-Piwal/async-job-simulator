type SidebarProps = {
  selectedNodeId: string | null;
};
const Sidebar = ({ selectedNodeId }: SidebarProps) => {
  return (
    <div className="border-2 border-black min-h-150 min-w-100 rounded">
      {selectedNodeId && (
        <div className="bg-white p-4 rounded shadow">
          Selected Node: {selectedNodeId}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
