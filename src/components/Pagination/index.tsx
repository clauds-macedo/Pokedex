import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import PagButton from "../PagButton";
import { styles } from "./styles"

const LEFT_PAGE = 'LEFT'
const RIGHT_PAGE = 'RIGHT'

const range = (from: number, to: number, step = 1) => {
  let i = from
  const range: any = []

  while (i <= to) {
    range.push(i)
    i += step
  }
  return range
}

type Props = {
  total: number
  limit: number
  onPageChanged: any
}

export default function Pagination({ total, limit, onPageChanged }: Props) {
  const [currentPage, setCurrentPage] = useState(1)

  let totalPages = Math.ceil(total / limit)
  const pageNeighbours = 1

  function fetchPageNumbers() {
    const totalNumbers = (pageNeighbours * 2) + 3
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours)
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours)
      let pages = range(startPage, endPage)

      const hasLeftPages = startPage > 2
      const hasRightPages = (totalPages - endPage) > 1
      const pagesOffset = totalNumbers - (pages.length + 1)

      switch (true) {
        // handle: (1) ... {5} [7] {8} (10)
        case (hasLeftPages && !hasRightPages): {
          const extraPages = range(startPage - pagesOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {3} [4] {5} ... (10)
        case (!hasLeftPages && hasRightPages): {
          const extraPages = range(endPage + 1, endPage + pagesOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) ... {5} [6] {7} ... (10)
        case (hasLeftPages && hasRightPages):
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);

  }
  const pages = fetchPageNumbers()

  useEffect(() => {
    goToPage(1)
  }, [])

  const goToPage = page => {
    const currentPage = Math.max(0, Math.min(page, totalPages))
    const paginationData = {
      currentPage,
      totalPages: totalPages,
      pageLimit: limit,
      totalRecords: total
    }

    setCurrentPage(currentPage)
    onPageChanged(paginationData)
  }

  console.log(currentPage)

  const handlePress = page => {
    goToPage(page)
  }

  return (
    <View style={styles.container}>
      <PagButton
        onPress={() => handlePress(currentPage - 1)}
        page='<'
      />
      {pages.map((page: number, key: number) => {
        return (
          <PagButton
            onPress={() => handlePress(page)}
            page={page}
            key={key}
          />
        )
      })}
      <PagButton
        onPress={() => handlePress(currentPage + 1)}
        page='>'
      />
    </View>
  )
}