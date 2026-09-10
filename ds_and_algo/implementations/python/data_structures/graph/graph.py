from collections.abc import Hashable
from typing import Generic, TypeVar

NodeType = TypeVar("NodeType", bound=Hashable)


class UndirectedGraph(Generic[NodeType]):
    """Class to build an undirected and unweighted graph using an adjacency list.

    Attributes:
        adj_list: A dictionary with the nodes as keys
            and their adjacency lists as values.
        num_nodes: The number of nodes in the graph.
    """

    adj_list: dict[NodeType, set[NodeType]]
    num_nodes: int

    def __init__(self) -> None:
        self.adj_list = {}
        self.num_nodes = 0

    def add_node(self, node: NodeType) -> None:
        """Add a node to the graph.

        Args:
            node: The node to add.
        """

        # Prevent overwriting existing nodes:
        if node not in self.adj_list:
            self.adj_list[node] = set()  # Initialize the Adjacency List for the node.
            self.num_nodes += 1  # Increments the number of nodes.

    def add_connection(self, node1: NodeType, node2: NodeType) -> None:
        """Add an undirected connection between two nodes.

        Args:
            node1: The first node in the connection.
            node2: The second node in the connection.
        """

        if node1 == node2:
            raise ValueError("Self-loops are not allowed.")

        # Add nodes if they do not exist:
        if node1 not in self.adj_list:
            self.add_node(node1)
        if node2 not in self.adj_list:
            self.add_node(node2)
        # Prevent duplicate edges:
        self.adj_list[node1].add(node2)  # Add node2 to node1's Adjacency List.
        self.adj_list[node2].add(node1)  # Add node1 to node2's Adjacency List.

    def remove_connection(self, node1: NodeType, node2: NodeType) -> None:
        """Remove an undirected connection between two nodes.

        Args:
            node1: The first node of the edge.
            node2: The other node of the edge.
        """

        if (
            node1 not in self.adj_list
            or node2 not in self.adj_list
            or node2 not in self.adj_list[node1]
        ):
            raise ValueError(f"Edge between {node1} and {node2} does not exist.")

        self.adj_list[node1].discard(node2)
        self.adj_list[node2].discard(node1)

    def remove_node(self, node: NodeType) -> None:
        """Remove a node and all of its connections from the graph.

        Args:
            node: The node to remove.
        """

        if node not in self.adj_list:
            raise ValueError("Node does not exist.")

        for neighbor in self.adj_list[node]:
            self.adj_list[neighbor].discard(node)

        del self.adj_list[node]
        self.num_nodes -= 1


# Creating the following graph:
#   0
#  / \
# 1 - 2

# Example usage:
if __name__ == "__main__":
    graph = UndirectedGraph()
    graph.add_connection(0, 1)
    graph.add_connection(0, 2)
    graph.add_connection(1, 2)
    print(graph.adj_list)  # {0: {1, 2}, 1: {0, 2}, 2: {0, 1}}
    print(graph.num_nodes)  # 3
