import React, { useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, Typography, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { lightTheme, darkTheme } from '../../../theme';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSubscription } from '../../../redux/actions/subscriptionActions';
import { getAllSubscriptions } from '../../../redux/selectors/subscriptionSelectors'; // Импортируйте селектор

const SubscriptionTable = ({ isDarkTheme }) => {
  const [view, setView] = useState('cards');
  const dispatch = useDispatch();
  const subscriptions = useSelector(getAllSubscriptions);
  

  const toggleView = () => {
    setView(view === 'cards' ? 'table' : 'cards');
  };

  const handleDelete = (id) => {
    dispatch(deleteSubscription(id));
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Box sx={{ padding: '24px', backgroundColor: isDarkTheme ? 'background.paper' : 'background.default', minHeight: 'calc(100vh - 40px)',}}>
        <Button onClick={toggleView}>
          Переключить на {view === 'cards' ? 'таблицу' : 'карточки'}
        </Button>

        {view === 'cards' ? (
          <Box>
            {subscriptions.map((subscription, index) => (
              <Card key={index}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {subscription.name}
                  </Typography>
                  <Typography color="text.secondary">
                    Категория: {subscription.category}
                  </Typography>
                  <Typography color="text.secondary">
                    Подписчики: {subscription.followers.toLocaleString()}
                  </Typography>
                  <Button onClick={() => handleDelete(subscription.id)}>
                    Перестать отслеживать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Название</TableCell>
                  <TableCell>Категория</TableCell>
                  <TableCell>Подписчики</TableCell>
                  <TableCell>Действия</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subscriptions.map((subscription, index) => (
                  <TableRow key={index} sx={{ backgroundColor: isDarkTheme ? 'background.paper' : 'background.default', }}>
                    <TableCell>{subscription.name}</TableCell>
                    <TableCell>{subscription.category}</TableCell>
                    <TableCell>{subscription.followers.toLocaleString()}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleDelete(subscription.id)}>
                        Перестать отслеживать
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default SubscriptionTable;