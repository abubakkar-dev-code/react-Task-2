import React, { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 10;
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const skip = (page - 1) * limit;
        const res = await fetch(
          `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`,
        );
        const data = await res.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, [page]);
  const handleChange = (id) => {
    setData((prev) => ({
      ...prev,
      todos: prev.todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    }));
  };
  const [data, setData] = useState([]);
  const totalPages = Math.ceil((data.total || 0) / limit);

  console.log(data, "satte");
  return (
    <div className="flex flex-col items-center ">
      <div className="w-full max-w-md mt-20 border border-gray-400 rounded-xl">
        <div className="bg-linear-to-r from-blue-400 to-purple-600 text-center py-8 rounded-t-xl">
          <h2 className="text-3xl font-bold ">TO DO LIST</h2>
        </div>
        <div className="px-12 py-10 flex flex-col items-center">
          <div>
            {loading ? (
              <div className="h-[350px] flex flex-col justify-center items-center gap-3">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-500 text-sm">Loading tasks...</p>
              </div>
            ) : (
              data?.todos?.map((item) => (
                <div className="flex gap-6 items-center mb-4 border border-gray-400 px-4 py-2 rounded-lg">
                  <form>
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => handleChange(item.id)}
                    />
                  </form>
                  <p
                    className={`${item.completed ? "line-through" : ""} text-xs`}
                  >
                    {item.todo}
                  </p>
                </div>
              ))
            )}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                disabled={page === 1}
                onClick={() => setPage((prev) => prev - 1)}
                className="px-3 py-1 bg-gray-800 text-white rounded disabled:opacity-40 cursor-pointer"
              >
                Prev
              </button>

              <span className="font-semibold text-sm">
                Page {page} of {totalPages}
              </span>

              <button
                disabled={page >= totalPages}
                onClick={() => setPage((prev) => prev + 1)}
                className="px-3 py-1 bg-gray-800 text-white rounded disabled:opacity-40 cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
