import React from 'react'
import { Card, Image } from 'semantic-ui-react'

type winner = {
    name: string,
    score: number,
}

type winnersProp = {
    winners: winner[]
}

const Winners = (props: winnersProp) => (
  <Card.Group>
      {
          props.winners.map((winner, index) => {
              return (
                <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                <Card.Content
                    header={winner.name}
                    description={winner.score}
                />
            </Card>
              )
          })

      }
  </Card.Group>
)

export default Winners